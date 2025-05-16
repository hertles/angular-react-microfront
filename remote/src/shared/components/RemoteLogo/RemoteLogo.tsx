import { css } from "@emotion/css";

const classes = {
  logoContainer: css({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  }),
  logo: css({
    height: "15em",
    padding: "1.5em",
    willChange: "filter",
    transition: "filter 300ms",
    "&:hover": {
      filter: "drop-shadow(0 0 2em #61dafbaa)",
    },
  }),
  counter: css({
    padding: "2em",
    button: {
      fontSize: "2em",
    },
  }),
};

interface RemoteLogoProps {
  value: number;
  onCounterClick: () => void;
}

export default function RemoteLogo(props: RemoteLogoProps) {
  const { value, onCounterClick } = props;

  return (
    <div className={classes.logoContainer}>
      <a href="https://react.dev" target="_blank">
        <img
          src={`${import.meta.env.BASE_URL}/react.svg`}
          className={classes.logo}
          alt="React logo"
        />
      </a>
      <div className={classes.counter}>
        <button onClick={() => onCounterClick()}>count is {value}</button>
      </div>
    </div>
  );
}
