import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { MainApp } from './Components/useContext/MainApp';
//import { CallbackHook } from './Components/Memos/CallbackHook';
//import { TodoApp } from './Components/useReducer/TodoApp';
//import { MemoHook } from './Components/Memos/MemoHook';
//import { Memorize } from './Components/Memos/Memorize';
//import { Layout } from './Components/useLayoutEffect/Layout';
//import { MultipleCustomHooks } from './Components/examples/MultipleCustomHooks';
//import { FocusScreen } from './Components/useRef/FocusScreen';
//import { RealExampleRef } from './Components/useRef/RealExampleRef';
//import { FormWithCustomHook } from './Components/useEffect/FormWithCustomHook';
//import { SimpleForm } from './Components/useEffect/SimpleForm';
//import { CounterApp } from './Components/useState/CounterApp';
//import { CounterWhitCustomHook } from './Components/useState/CounterWhitCustomHook';
//import { HookApp } from './HookApp';

ReactDOM.render(
    <BrowserRouter>
        <MainApp />
    </BrowserRouter>,
    document.getElementById('root')
);