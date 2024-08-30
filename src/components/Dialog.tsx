export interface IDialogProps {
  title: string;
  children?: React.ReactNode
}

export function Dialog({ title, children }: IDialogProps) {
  return (
    <div className="h-screen w-full fixed flex justify-center items-center backdrop-blur-md top-0 left-0">
      <div>
        <h1 className="text-3xl font-bold text-center p-2">{title}</h1>
        <div>
            {children}
        </div>
      </div>
    </div>
  );
}
