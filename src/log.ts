import syncWriteFile from "./write-file";

const log = (str: string) => {
  const date = new Date();
  const msg = date + '---' + str;
  console.log(msg);
  syncWriteFile("../logs", msg + "\n");
}

export default log;
