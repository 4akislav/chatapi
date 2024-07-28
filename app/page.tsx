import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main content="width=device-width, initial-scale=1.0" >
      <div className="styles.right">
        <div className="styles.profileSection">
          {}
          <h2>Profile</h2>
        </div>
        <div className="styles.chatSection">
          {}
          <h2>Chat</h2>
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Type a message"
            className="styles.input"
          />
        </div>
      </div>
    </main>
  );
}
