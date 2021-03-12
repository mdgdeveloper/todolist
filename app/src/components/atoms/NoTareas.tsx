import Box from "@material-ui/core/Box";

interface Props {}

const NoTareas = (props: Props) => {
  return (
    <Box>
      <section className="message-list">
        <section className="message -left">


          <div className="nes-balloon from-left">
            <p>Hurra! No te quedan tareas!</p>
          </div>
        </section>
      </section>

      <i className="nes-mario"></i>
    </Box>
  );
};

export default NoTareas;
