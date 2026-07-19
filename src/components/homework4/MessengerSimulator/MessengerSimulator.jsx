import styles from './MessengerSimulator.module.css';
import {useState} from 'react';

//Приклад. Створити імітатор мессенджера. Є можлиість додавати/відображати повідомлення і ставити лайки (додайте стилі на свій розсуд).

function MessengerSimulator() {
  const [messages, setMessages] = useState([
    {id: 1, text: 'Hello', likes: 2, dislikes: 0},
    {id: 2, text: 'Hi', likes: 4, dislikes: 0},
    {id: 3, text: 'Bye', likes: 2, dislikes: 0},
    {id: 4, text: 'Ok', likes: 1, dislikes: 0},
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const messageObj = {
      id: Date.now(),
      text: newMessage.trim(),
      likes: 0,
      dislikes: 0,
    };

    setMessages([...messages, messageObj]);
    setNewMessage('');
  };

  const handleLike = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? {...msg, likes: msg.likes + 1} : msg
      )
    );
  };

  const handleDislike = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? {...msg, dislikes: msg.dislikes + 1} : msg
      )
    );
  };

  return (
    <>
      <div className={styles.conditionWrapper}>
        <h2 className={styles.title}>Job condition:</h2>
        <p className={styles.description}>
          Приклад. Створити імітатор мессенджера. <br />
          Є можливість додавати/відображати повідомлення і ставити лайки (додайте стилі на свій розсуд).
        </p>
      </div>

      <div className={styles.solutionWrapper}>
        <h2 className={styles.title}>Solution:</h2>
        <div className={styles.messengerWrapper}>
          <div className={styles.chatArea}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={styles.messageRow}
              >
                <span className={styles.messageText}>{msg.text}</span>

                <div className={styles.actions}>
                  <button
                    type="button"
                    className={styles.actionButton}
                    onClick={() => handleLike(msg.id)}
                  >
                    Like
                  </button>
                  <button
                    type="button"
                    className={styles.actionButton}
                    onClick={() => handleDislike(msg.id)}
                  >
                    Dislike
                  </button>
                  <div className={styles.reactionTextWrapper}>
                    <span className={styles.likesCount}>Likes: {msg.likes}</span>
                    <span className={styles.dislikesCount}>Dislikes: {msg.dislikes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.inputArea}>
            <input
              type="text"
              className={styles.messageInput}
              placeholder="Type a new message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              type="button"
              className={styles.sendButton}
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessengerSimulator;
