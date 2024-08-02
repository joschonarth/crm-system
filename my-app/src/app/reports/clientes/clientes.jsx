import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

function clientesPDF(clientes){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [];

    const details = [];

    const footer = [];

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],
        header: [reportTitle],
        content: [details],
        footer: [footer]
    }

    pdfMake.createPdf(docDefinitions).download();
}

export default clientesPDF;