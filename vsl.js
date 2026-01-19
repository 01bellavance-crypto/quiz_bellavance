import React from 'react';
import { createRoot } from 'react-dom/client';
import Player from '@vimeo/player';

function VSLPage() {
  const iframeRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const [muted, setMuted] = React.useState(true);

  React.useEffect(() => {
    if (!iframeRef.current) return;

    playerRef.current = new Player(iframeRef.current, {
      muted: true,
      autopause: false,
    });
  }, []);

  const startVideo = async () => {
    await playerRef.current.play();
  };

  const unmute = async () => {
    await playerRef.current.play();
    await playerRef.current.setMuted(false);
    await playerRef.current.setVolume(1);
    setMuted(false);
  };

  return (
    React.createElement('div', { style: { padding: '20px' } },
      React.createElement('div', { style: { position: 'relative', maxWidth: '720px', margin: '0 auto' } },
        React.createElement('iframe', {
          ref: iframeRef,
          src: 'https://player.vimeo.com/video/1156096923?controls=0&playsinline=1',
          width: '100%',
          height: '405',
          allow: 'autoplay; fullscreen; picture-in-picture',
          style: { borderRadius: '12px' }
        }),
        muted && React.createElement(
          'button',
          {
            onClick: unmute,
            style: {
              position: 'absolute',
              top: '16px',
              right: '16px',
              padding: '10px 16px',
              borderRadius: '999px',
              border: 'none',
              background: '#2A9D8F',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer'
            }
          },
          '🔊 TOQUE PARA ATIVAR SOM'
        )
      ),
      React.createElement(
        'button',
        {
          onClick: startVideo,
          style: { marginTop: '20px', padding: '12px 20px' }
        },
        '▶ Assistir vídeo'
      )
    )
  );
}

createRoot(document.getElementById('root')).render(
  React.createElement(VSLPage)
);
