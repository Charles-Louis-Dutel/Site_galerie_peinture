

export default function PaintingListTitleRow() {

    return (
        <div className="w-full grid grid-cols-12 py-4 px-6 gap-2 bg-gray-50
            border-b border-gray-200"
        >
            <div className="col-span-2 px-2">
                Visuel
            </div>

            <div className="col-span-2 px-2 pl-4">
                Titre de l'oeuvre
            </div>

            <div className="col-span-3 px-2">
                Infos
            </div>

            <div className="col-span-2 px-2">
                Date d'ajout
            </div>

            <div className="col-span-1 col-start-12 px-2">
                Action
            </div>
        </div>
    );
}