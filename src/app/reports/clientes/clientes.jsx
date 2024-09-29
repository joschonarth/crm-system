import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

function clientesPDF(clientes){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: 'Clientes',
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45] // left, top, right, bottom
        }
    ];

    const dados = clientes.map((cliente) => {
        return [
            {text: cliente.id, fontSize: 10, margin: [0, 2, 0, 2]},
            {text: cliente.nome, fontSize: 10, margin: [0, 2, 0, 2]},
            {text: cliente.email, fontSize: 10, margin: [0, 2, 0, 2]},
            {text: cliente.phone, fontSize: 10, margin: [0, 2, 0, 2]},
        ]
    })

    const details = [
        {
            table: {
                headerRows: 1,
                widths: ['*', '*', '*', '*'],
                body: [
                    [
                        {text: 'Código', style: 'tableHeader', fontSize: 10},
                        {text: 'Nome', style: 'tableHeader', fontSize: 10},
                        {text: 'Email', style: 'tableHeader', fontSize: 10},
                        {text: 'Telefone', style: 'tableHeader', fontSize: 10},
                    ],
                    ...dados
                ]
            },
            layout: 'lightHorizontalLines'
        }
    ];

    function Footer(currentPage, pageCount){
        return [
            {
                text: currentPage + ' / ' + pageCount,
                alignment: 'right',
                fontSize: 10,
                margin: [0, 10, 20, 0] // left, top, right, bottom
            }
        ]
    }

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],
        header: [reportTitle],
        content: [details],
        footer: Footer
    }

    pdfMake.createPdf(docDefinitions).download();
}

export default clientesPDF;