import Box from "@material-ui/core/Box";

interface Props {}

const Header = (props: Props) => {
  return (
    <Box style={{ padding: "20px" }} bgcolor='#EEEEEE'>
      <Box textAlign="center">
      <i className="nes-icon is-large star"></i>
        <i className="nes-icon is-large star"></i>
        <i className="nes-icon is-large star"></i>
        <i className="nes-icon is-large star"></i>
        <i className="nes-icon is-large star"></i>
      </Box>
      <Box textAlign="center" style={{ padding: "20px" }}>
        <a href="#/" className="nes-badge is-splited">
          <span className="is-dark">MDG</span>
          <span className="is-primary">dev</span>
        </a>
      </Box>
      <Box textAlign="center" style={{ paddingTop: "10px" }}>
        <span className="nes-text">ToDo List System 2021 </span>
      </Box>
      
    </Box>
  );
};

export default Header;
