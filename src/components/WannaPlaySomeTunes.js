import { useMusicContext } from './MusicContext';

function SongInfo() {
    const { currentSong } = useMusicContext();

    const handleImageClick = () => {
        window.open(currentSong.spotify);
    };

    return (
        <div className="song-info space-y-2">
            <h2 className='font-DMMono font-medium'>| Wanna play some tunes?</h2>
            <div className='flex'>
                <p>
                    You are Listening to <span className="bg-sea_blue"><strong>{currentSong.title}</strong></span> by <em>{currentSong.artist}</em>
                </p>
                <img className='ml-2 w-5 h-5 cursor-pointer' src={process.env.PUBLIC_URL + "/icons/spotify.svg"} alt="Spotify Logo" onClick={handleImageClick} />
            </div>
        </div>
    );
}

  export default SongInfo;