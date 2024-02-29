import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/shadcn/components/ui/drawer'
import CreateForm from './CreateOpForm'

const CreateOpDrawer = () => {
  return (
    <>
      <Drawer modal>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerOverlay className="bg-eerie_black-200/10" />
        <DrawerContent className="bg-base dark:bg-eerie_black">
          <DrawerHeader>
            <DrawerTitle>Do you want to create a new operation?</DrawerTitle>
          </DrawerHeader>
          <DrawerDescription asChild>
            <p className="text-center text-cadet_gray-200">
              Please fill the fields with the operation data
            </p>
          </DrawerDescription>

          <DrawerFooter>
            <CreateForm />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CreateOpDrawer
