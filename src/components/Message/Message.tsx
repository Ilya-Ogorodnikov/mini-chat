import { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Grid, Avatar } from '@mui/material';

import { IMessageProps } from '../../models';
import { auth } from '../../utils/firebase';

const Message: FC<IMessageProps> = ({ message }) => {
  const [user] = useAuthState(auth);

  return (
    <div
      key={message.createdAt}
      style={{
        margin: 10,
        border:
          user?.uid === message.uid ? '2px solid green' : '2px dashed red',
        marginLeft: user?.uid === message.uid ? 'auto' : 10,
        width: 'fit-content',
        padding: 5,
      }}
    >
      <Grid container>
        <Avatar src={message.photoURL} />

        <div>{message.displayName}</div>
      </Grid>

      <div>{message.text}</div>
    </div>
  );
};

export default Message;
