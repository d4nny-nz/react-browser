import Header from "../components/Header"
import ExtensionList from "../components/ExtensionList"

const Extensions = () => {
  return (
    <div className=" dark-gradient h-screen overflow-y-auto p-4">
      <Header/>
      <ExtensionList/>
    </div>
  )
}

export default Extensions