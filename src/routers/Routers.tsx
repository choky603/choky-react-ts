import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";

const MainComponenet = lazy(() => import("../components/MainComponent"));
const TodoList = lazy(() => import("../components/TodoList"));


const Routers = (props: any) => {
    return (
        <Suspense fallback={<></>}>
            <Routes>
                <Route path='/' element={<Navigate replace to='/main' {...props} />} />
                <Route path='main' element={<MainComponenet {...props} />} />
                <Route path='todoList' element={<TodoList {...props} />} />
            </Routes>
        </Suspense>
    )
}

export default Routers;