import { FC } from 'react';
import { Container, Grid } from '@mui/material';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';

import { Loader, CreateMessage, Message } from '..';

import { firestore } from '../../utils/firebase';

import './style.scss';

const Chat: FC = () => {
  const [messages, loading] = useCollectionData(
    query(collection(firestore, 'messages'), orderBy('createdAt')),
  );

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Grid
        justifyContent="center"
        container
        sx={{ height: window.innerHeight - 50, marginTop: 20 }}
      >
        <div className="chat-box">
          {messages &&
            messages.map(message => (
              <Message message={message} key={message.createdAt} />
            ))}
        </div>

        <CreateMessage />
      </Grid>
    </Container>
  );
};
export default Chat;
