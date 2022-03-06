import "./App.css";
import Toggle from "./components/toggle/Toggle";
// import Counter from "./components/counter/Counter";
import YoutubeList from "./components/Youtube/YoutubeList";
import Game from "./components/tictactoe/Game";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import Photos from "./components/photo/Photos";
import Header from "./components/Header";
import HackerNews from "./components/news/HackerNews";
import HackerNewsWithReducer from "./components/news/HackerNewsWithReducer";
import HackerNewsWithHook from "./components/news/HackerNewsWithHook";
import {
  createContext,
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
// import Input from "./components/Input";
import TextareaAutoResize from "./components/TextareaAutoResize";
import Dropdown from "./components/Dropdown";
import Blogs from "./components/Blogs";
import SidebarMenu from "./components/SidebarMenu";
import useClickOutside from "./hooks/useClickOutside";
import Form from "./components/form/Form";
import MovieSearchApp from "./components/MovieSearchApp";
import SignUpForm from "./components/form/SignUpForm";
import SignUpFormV2 from "./components/form/SignUpFormV2";
import SignUpFormHook from "./components/form/SignUpFormHook";
import Modal from "./components/modal/Modal";
import DropdownPortal from "./components/DropdownPortal";
import Tooltip from "./components/Tooltip";
import useHover from "./hooks/useHover";
import Portal from "./components/Portal";
import ModalBase from "./components/modal/ModalBase";
import ModalAdvance from "./components/modal/ModalAdvance";
import TooltipAdvance from "./components/TooltipAdvance";
import { CountProvider, useCount } from "./contexts/countContext";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./contexts/authContext";
import { GalleryProvider } from "./contexts/galerry-context";
import PhotoList from "./components/gallery/PhotoList";
import CartList from "./components/gallery/CartList";
const theme = {
  colors: {
    blue: "#2979ff",
  },
};

function CountDisplay({ children }) {
  const [count] = useCount();
  return (
    <div className="">
      {children} The count is {count}
    </div>
  );
}

function Counter() {
  const [, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      className="p-4 text-white bg-blue-400 rounded-lg"
      onClick={increment}
    >
      Increment count
    </button>
  );
}
function App() {
  // const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [hovered, setHovered] = useState(false);
  // const { show, setShow, nodeRef } = useClickOutside("button");
  // const [hovered, hoverNodeRef] = useHover(false, null);

  // useEffect(() => {
  //   return () => {
  //     clearInterval(timerRef.current);
  //   }
  // }, []);
  // const timerRef = useRef(null);
  // const [count, setCount] = useState(0);
  // const handleStart = () => {
  //   if(timerRef.current) return;
  //   timerRef.current = setInterval(() => {
  //     setCount((counter) => counter + 1);
  //   }, 1000);
  // };

  // const handleStop = () => {
  //   clearInterval(timerRef.current);
  //   timerRef.current = null;
  // };
  const [openModalBase, setOpenModalBase] = useState(false);

  return (
    // <div className="flex items-center justify-center p-5 gap-x-5">
    //   <CountProvider>
    //     <CountDisplay>Halo Halo</CountDisplay>
    //     <Counter></Counter>
    //   </CountProvider>
    // </div>
    // <Fragment>
    //   <>
    //     <Modal handleClose={() => setShowModal(false)} open={showModal}></Modal>
    //   </>

    //   <button
    //     onClick={() => setShowModal(true)}
    //     className="p-4 text-white bg-blue-500 rounded-lg"
    //   >
    //     Show modal
    //   </button>
    //   <div className="relative z-30">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rerum
    //     molestiae eum obcaecati explicabo natus, autem hic nihil atque quod
    //     impedit cumque rem odio nulla sit excepturi pariatur deleniti laborum!
    //   </div>
    //   <div className="p-5 overflow-hidden">
    //     <DropdownPortal></DropdownPortal>
    //   </div>
    //   {/* <SignUpFormHook></SignUpFormHook> */}
    // </Fragment>
    // <Fragment>
    //   {/* <div className="p-10">
    //     <Tooltip text="Hover me">
    //       Lorem ipsum dolor sit amet consectetur
    //     </Tooltip>
    //   </div> */}
    //   <Portal></Portal>
    // </Fragment>
    // <div className="flex items-center justify-center h-screen">
    // <button className="p-5 text-center text-white bg-blue-500 rounded-lg " onClick={()=> setOpenModalBase(true)}> Open Modal Base</button>
    //   {/* <ModalBase visible={openModalBase} onClose={setOpenModalBase}>
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
    //     ratione eligendi maiores ducimus a recusandae vitae alias ab tempora
    //     voluptate nobis, consectetur perspiciatis saepe modi facere sequi nisi
    //     non consequatur?
    //   </ModalBase> */}
    //   <ModalAdvance visible={openModalBase} onClose={()=>setOpenModalBase(false)} heading="Welcome Back!" bodyClassName="w-full max-w-[482px] relative z-10">

    //     <div className="flex flex-col gap-3 mb-5">
    //       <label className="text-sm">Email address</label>
    //       <input
    //         type="email"
    //         className="w-full text-sm leading-normal p-4 !bg-[#E7ECF3] rounded-lg"
    //         placeholder="Enter your email"
    //       />
    //       <label className="text-sm">Password</label>
    //       <input
    //         type="password"
    //         className="w-full text-sm leading-normal p-4 bg-[#E7ECF3] rounded-lg"
    //         placeholder="Enter your password"
    //       />
    //       <button className="w-full p-4 font-semibold text-base bg-[#316bff] rounded-lg text-white">
    //         Sign in
    //       </button>
    //     </div>
    //   </ModalAdvance>
    //   <TooltipAdvance title="Tooltip">This is a Tooltip</TooltipAdvance>
    // </div>
    <Fragment>
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain>
          
          </HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
