import reactLogo from "../../../assets/react.svg";

interface RemoteLogoProps {
    value: number;
    onCounterClick: () => void;
}

export default function RemoteLogo(props: RemoteLogoProps) {
    const {value, onCounterClick} = props;

    return (
        <div className='remote-logo'>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </a>
            <div className="card">
                <button onClick={() => onCounterClick()}>
                    count is {value}
                </button>
            </div>
        </div>
    );
}
