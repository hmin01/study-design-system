import { Button } from "./components/Button";
import { Dialog, DialogContent, DialogTrigger } from "./components/Dialog";

function App() {
  return (
    <div style={{ paddingLeft: 40 }}>
      <Dialog>
        <DialogTrigger>
          aasdf
          {/* <Button css={{ backgroundColor: "Yellow" }}>Destructive</Button> */}
        </DialogTrigger>
        <DialogContent>hihi</DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
