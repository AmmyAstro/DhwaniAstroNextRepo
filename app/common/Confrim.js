   <div className="fixed inset-0 flex items-center justify-center bg-[#00000060] bg-opacity-50">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-sm text-center text-black">
                Are you sure you want to end the chat?
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <button aria-label="Confirm End Chat"
                  className="px-4 py-2 text-white bg-green-500 rounded-md"
                  onClick={() => handleConfirmEndChat(true)}
                >
                  Yes
                </button> 
                <button aria-label="Cancel End Chat"
                  className="px-4 py-2 text-white bg-red-500 rounded-md"
                  onClick={() => handleConfirmEndChat(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>