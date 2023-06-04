import { useOnlineUserStatus } from "./hooks/useOnlineUserStatus";
function GroupChat() {
	const userId=100;
  const isUserOnline = useOnlineUserStatus(userId);

  return (
    <div>
      <h1>Chat with User {userId}</h1>
      <p>{isUserOnline ? 'User is online' : 'User is offline'}</p>
      {/* displaying Profile .....
      ...
       */}
    </div>
  );
}
export default GroupChat;
