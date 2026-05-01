import { Stack } from '@mui/material';
import Dropdown from '../../../ui/Dropdown';
import Avatar from '../../../ui/Avatar';
import Settings from '@mui/icons-material/Settings';

const DetailProject = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        width: '100%',
      }}
      justifycontent={'center'}
      alignitems={'center'}
      direction={'row'}
      spacing={2}
    >
      <Avatar
        text={'William Susanto'}
        onClick={() => {
          console.log('handle click avatar');
        }}
      />
      <Dropdown
        icon={<Settings />}
        options={[
          {
            label: 'Tutup proyek ini',
            onClick() {
              console.log('handle close project');
            },
          },
          {
            label: 'Ubah deadline',
            onClick() {
              console.log('handle update deadline project');
            },
          },
        ]}
      />
    </Stack>
  );
};

export default DetailProject;
