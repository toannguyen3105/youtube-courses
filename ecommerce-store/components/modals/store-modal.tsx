"use client";

import Modal from "@/components/ui/modal";
import useStoreModal from "@/hooks/use-store-modal";

const StoreModal = () => {
  const useStore = useStoreModal();

  return (
    <Modal
      description="Create store to manage products, categories"
      title="Create a new store"
      isOpen={useStore.isOpen}
      onClose={useStore.onClose}
    >
      Form Create Store
    </Modal>
  );
};

export default StoreModal;
