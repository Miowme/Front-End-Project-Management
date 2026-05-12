import { colors, Paper, Stack, Typography } from '@mui/material';

import SidebarLayout from '@/components/layouts/SidebarLayout';
import { useLoaderData } from 'react-router';
import useDetailProjectContext from '../hooks/useDetailProjectContext';
import CreateNewList from './CreateNewList';
import ListSortableItem from './ListSortableItem';
import useDetailProjectContainer from '../hooks/useDetailProjectContainer';
import { DndContext } from '@dnd-kit/core';

const DetailProjectContainer = () => {
  const {
    boardListData,
    detailProjectData,
    detailProjectContext,
    activeDragItem,
    boardListDataMapPublicIds,
    handleDragCancel,
    handleDragStart,
    handleDragEnd,
    sensors,
  } = useDetailProjectContainer();

  return (
    <SidebarLayout
      pageTitle={`${detailProjectData.title} (${detailProjectContext.getProjectInitials})`}
      breadcrumbs={[
        {
          label: 'Daftar Proyek',
          href: '/projects',
        },
        {
          label: detailProjectData.title,
        },
      ]}
    >
      <DndContext>
        <Stack
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
          direction={'row'}
          gap={2}
          pb={5}
          sx={{
            overflowX: 'auto',
          }}
        >
          {boardListData?.map((item) => (
            <ListSortableItem
              key={item.public_id}
              id={item.public_id}
              item={item}
            />
          ))}
          <CreateNewList />
        </Stack>
      </DndContext>
    </SidebarLayout>
  );
};

export default DetailProjectContainer;
