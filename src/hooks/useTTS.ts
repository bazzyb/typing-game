// import 'dotenv/config'

export function useTTS() {
  const audioCache = new Map<string, HTMLAudioElement>();

  function _convertResToAudio(audioContent: string) {
    const binaryAudioData = window.atob(audioContent);

    // Convert binary to ArrayBuffer
    const arrayBuffer = new ArrayBuffer(binaryAudioData.length);
    const view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryAudioData.length; i++) {
      view[i] = binaryAudioData.charCodeAt(i);
    }

    // Create a Blob from the ArrayBuffer
    const blob = new Blob([arrayBuffer], { type: 'audio/mp3' });

    // Create an audio element
    const audioElement = new Audio();

    // Set the audio source to the Blob URL
    audioElement.src = URL.createObjectURL(blob);

    return audioElement;
  }

  async function getAudio(text: string) {
    if (audioCache.has(text)) {
      return audioCache.get(text);
    }

    const ttsUrl = 'https://texttospeech.googleapis.com/v1/text:synthesize';
    const apiKey = import.meta.env.VITE_TEXT_TO_SPEECH_API_KEY;
    const res = await fetch(`${ttsUrl}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: { text },
        voice: { languageCode: 'en-GB' },
        audioConfig: { audioEncoding: 'MP3' },
      }),
    });

    if (res.ok) {
      const { audioContent } = await res.json();
      const audio = _convertResToAudio(audioContent);
      audioCache.set(text, audio);
      return audio;
    }

    console.error('OOPS', res.status, res.statusText);
    return null;
  }

  async function playAudio(text: string) {
    const audio = await getAudio(text);
    if (audio) {
      audio.play();
    }
  }

  return { getAudio, playAudio };
}
