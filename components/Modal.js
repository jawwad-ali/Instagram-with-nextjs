import { Dialog, Transition } from "@headlessui/react"
import { CameraIcon } from "@heroicons/react/outline"
import { Fragment, useRef, useState } from "react"
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"

function Modal() {
    const [open, setOpen] = useRecoilState(modalState)
    const [selectedFile, setSelectedFile] = useState(null)
    const filePickerRef = useRef(null)
    const captionRef = useRef(null)

    // getting the image, user selected
    const addImageToPost = (e) => {
        const reader = new FileReader()

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }

    return (
        <Transition.Root show={open} as={Fragment} >
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                onClose={setOpen}
            >
                <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block 
                    sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >&f8203;</span>


                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-middle bg-white rounded-lg px-4 text-left overflow-x-hidden 
                    shadow-xl transform transition-all sm: my-8 sm: sm: max-w-sm sm: w-full sm: p-6">
                            <div>
                                {
                                    selectedFile ? (
                                        <img
                                            src={selectedFile}
                                            alt="Photo"
                                            onClick={() => setSelectedFile(null)}
                                            className="w-full cursor-pointer object-contain" />
                                    ) : (
                                        <div
                                            className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 
                                cursor-pointer"
                                            onClick={() => filePickerRef.current.click()}
                                        >
                                            <CameraIcon
                                                className="h-6 w-6 text-red-600"
                                                aria="true"
                                            />
                                        </div>
                                    )
                                }

                                <div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-500">
                                            Upload a Photo
                                        </Dialog.Title>
                                        <div>
                                            <input
                                                type="file"
                                                hidden
                                                ref={filePickerRef}
                                                onChange={addImageToPost}
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <input type="text" placeholder="Please enter a Placehodler"
                                                className="border-none focus:ring-0 w-full text-center"
                                                ref={captionRef}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6">
                                    <button className="inline-flex justify-center w-full rounded-md border border-transparent 
                    shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white /*hover:bg-red-700*/
                    focus: outline: none focus: ring-2 focus: ring-offset-2 focuse: ring-red-500 sm: text-sm disabled: bg-gray-500
                    disabled: cursor-not-allowed hover: disabled: bg-gray-500
                    ">
                                        Upload Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog >
        </Transition.Root >
    )
}

export default Modal