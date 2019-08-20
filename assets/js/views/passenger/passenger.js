$(document).ready(function() {

    /* Table Style of the Desktop  */
    $('#desktopTable').DataTable({
        "lengthChange": false,
        "searching": false,
        "info": false,
        "paging": false
    });

    /* Link - See More Reports */
    $('#seeTable').click(function () {
        openVeloModal(veloModal);
    });

    /* Table Style of the Modal  */ 
    $('#modalTable').DataTable({
        "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": ">",
                "sPrevious": "<"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
        "lengthChange": false,
        "info": false,
        "pagingType": "simple_numbers",
        responsive: true,
    });

    tableStyle('#modalTable');

    // TODO: Podria moverse al 'general.jss'     
    function tableStyle(table) {
        // lenght
        $('div.table-responsive > div.dataTables_wrapper > div.row > div[class^="col-sm-12"]').removeClass('col-sm-12');
        $('div.table-responsive > div.dataTables_wrapper > div.row > div[class^="col-md-6"]').removeClass('col-md-6');
        $('div.table-responsive > div.dataTables_wrapper > div.row > div').addClass('col-12');
        // filter
        $(table + '_filter input').removeClass('form-control');
        $(table + '_filter input').removeClass('form-control-sm');
        $(table + '_filter input').attr('placeholder', 'Buscar');
        // info
        $('div.table-responsive > div.dataTables_wrapper > div.row > div[class^="col-md-5"]').remove();
        // paginate
        $('div.table-responsive > div.dataTables_wrapper > div.row > div[class^="col-md-7"]').removeClass('col-md-7'); 
    }

    /* SideBar and Button Menu (Collapse) */
    if ($(window).width() < 400) {
        $('#passengerDesktop>div.row div.col-11').addClass('pb-3');
        $('#passengerDesktop>div.row div.col-11').removeClass('h-100');
        $('#rowinfoPassenger').removeClass('mx-auto');
        $('#btnCollapse2').click(function () {
            $('#sideBar').toggleClass('d-none');
            $('#btnCollapse2').addClass('invisible');
        });
        $('#btnCollapse').click(function () {
            $('#sideBar').toggleClass('d-none');
            $('#btnCollapse2').removeClass('invisible');
        });
    } else {
        $('#btnCollapse').click(function () {
            $('#sideBar').toggleClass('active');
            $('#btnCollapse').toggleClass('pl-lg-3');
        });
    }


});