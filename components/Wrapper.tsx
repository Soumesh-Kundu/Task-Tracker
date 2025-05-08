"use client";
import { store } from "@/lib/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import TaskModal from "./Task/Modal";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        {children}
        <TaskModal />
      </Provider>
    </SessionProvider>
  );
}
