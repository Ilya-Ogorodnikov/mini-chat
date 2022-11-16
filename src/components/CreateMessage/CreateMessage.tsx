import { FC, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, createNewMessage } from '../../utils/firebase';

const CreateMessage: FC = () => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState('');

  const sendMessage = async (event: React.MouseEvent) => {
    event.preventDefault();

    await createNewMessage(user!, message);

    setMessage('');
  };

  return (
    <form style={{ width: '80%' }}>
      <Grid
        container
        direction="column"
        alignItems="flex-end"
        sx={{ width: '100%' }}
        gap={1}
      >
        <TextField
          variant="outlined"
          fullWidth
          maxRows={2}
          value={message}
          onChange={event => setMessage(event.target.value)}
        />

        <Button
          variant="outlined"
          onClick={sendMessage}
          disabled={message.length === 0}
          type="submit"
        >
          Отправить
        </Button>
      </Grid>
    </form>
  );
};

export default CreateMessage;
