import React from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Modal = ({
	openModal,
	message,
	successMsg,
	iconColor,
	action,
	actionBtnLabel,
	afterActionNavigateTo,
}) => {
	const navigate = useNavigate();
	return (
		<>
			<div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center ">
				<div className="bg-white border border-purple flex flex-col gap-y-4 px-8 py-4 min-h-[50px] max-w-[400px] items-center rounded">
					<AiFillQuestionCircle className={`text-${iconColor}`} size={50} />
					<div className="text-center">
						<p>{successMsg === '' ? message : successMsg}</p>
					</div>
					<div className="flex gap-x-8">
						{!successMsg ? (
							<>
								<button
									onClick={() => openModal(false)}
									className="cursor-pointer text-error items-center gap-x-1 px-2 py-1 rounded border border-purple"
								>
									Cancel
								</button>
								<button
									onClick={() => action(this)}
									className="cursor-pointer text-green-600 items-center gap-x-1 px-2 py-1 rounded border border-purple"
								>
									{actionBtnLabel}
								</button>
							</>
						) : (
							<button
								onClick={() => {
									if (!afterActionNavigateTo) {
										openModal(false);
									} else {
										navigate(`${afterActionNavigateTo}`);
									}
								}}
								className="cursor-pointer border border-purple bg-purple text-white items-center gap-x-1 px-2 py-1 rounded"
							>
								OK
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
