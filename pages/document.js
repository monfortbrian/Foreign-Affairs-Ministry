import DocMediaMenu from "../components/DocMediaMenu"
import Header from "../components/Header"
import PdfIcon from '@material-ui/icons/PictureAsPdfRounded';
import BtnScrollTop from "../components/BtnScrollTop";

const document = () => {
    return (
        <div className="text-gray-600 text-sm">
            <Header/>
            <DocMediaMenu/>
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h1 className="text-2xl font-semibold mb-4">Document</h1>
                <p className="max-w-xl text-justify">This section contains a list of laws set by the cabinet. Each law has a brief explanatory note describing the policy vision, the policy objectives and the related documentation.the policy vision, the policy objectives and the related documentation.</p>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-4">
                <table className="w-full border-separate text-left" cellSpacing="10">
                    <thead>
                        <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                        <td><PdfIcon className="text-red-400"/></td>
                        <td className="whitespace-nowrap max-w-xs overflow-ellipsis overflow-hidden">Press_Release_United_Republic_of_Tanzania_-Burundi.pdf</td>
                        <td>412 KB</td>
                        </tr>
                        <tr>
                        <td><PdfIcon  className="text-red-400"/></td>
                        <td className="whitespace-nowrap max-w-xs overflow-ellipsis overflow-hidden">objectives and the related documentation.pdf</td>
                        <td>712 KB</td>
                        </tr>
                        <tr >
                        <td><PdfIcon className="text-red-400"/></td>
                        <td className="whitespace-nowrap max-w-xs overflow-ellipsis overflow-hidden">Each law has a brief explanatory note.pdf</td>
                        <td>127 KB</td>
                        </tr>
                        <tr>
                        <td><PdfIcon  className="text-red-400"/></td>
                        <td className="whitespace-nowrap max-w-xs overflow-ellipsis overflow-hidden">the policy objectives and the related documentation.pdf</td>
                        <td>512 KB</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <BtnScrollTop/>
        </div>
    )
}

export default document
