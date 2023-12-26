import React, { useState } from 'react'
import { Button } from 'components/ui'
import { ConfirmDialog } from 'components/shared'
import { HiOutlineTrash } from 'react-icons/hi'

const DeleteProductButton = ({ onDelete }) => {
    const [dialogOpen, setDialogOpen] = useState(false)

    const onConfirmDialogOpen = () => {
        setDialogOpen(true)
    }

    const onConfirmDialogClose = () => {
        setDialogOpen(false)
    }

    const handleConfirm = () => {
        onDelete?.(setDialogOpen)
    }

    return (
        <>

            <Button
                className="bg-rose-600 flex-1 text-white hover:bg-rose-300"
                size="sm"
                variant="twoTone"
                icon={<HiOutlineTrash />}
                type="button"
                onClick={onConfirmDialogOpen}
            >Xoá</Button>
            <ConfirmDialog
                isOpen={dialogOpen}
                onClose={onConfirmDialogClose}
                onRequestClose={onConfirmDialogClose}
                type="danger"
                title="Cảnh báo"
                cancelText="Huỷ"
                confirmText="Đồng ý"
                onCancel={onConfirmDialogClose}
                onConfirm={handleConfirm}
                confirmButtonColor="red-600"
            >
                <p>
                    Bạn có chắc xoá sản phẩm này không?
                </p>
            </ConfirmDialog>
        </>
    )
}

export default DeleteProductButton