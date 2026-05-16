import ModalTaskDetailProvider from './ModalTaskDetailContext';

const ModalTaskDetail = () => {
  return (
    <ModalTaskDetailProvider>
      <ModalTaskDetail />
    </ModalTaskDetailProvider>
  );
};

export default ModalTaskDetail;
