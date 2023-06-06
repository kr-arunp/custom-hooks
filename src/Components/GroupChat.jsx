import { useIsUserOnline } from "./hooks/useIsUserOnline";
function GroupChat() {
  {
    /*
    ....
    ...
    ..
    .
    */
}
	const userId=100;
  const isUserOnline = useIsUserOnline(userId);
  return (
    <div>
      <div>
      <h1>Chat with User {userId}</h1>
      <p>{isUserOnline ? 'User is online' : 'User is offline'}</p>
      {/* displaying Profile .....
      ...
    */}
    </div>
    </div>
  );
}
export default GroupChat;
