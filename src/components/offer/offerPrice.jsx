import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import OfferDiscount from "./offerDiscount";
import OfferPrepaid from "./offerPrepaid";

function createData(name, prepaid, discount, total) {
    let result = {
        'name': name,
        'prepaid': prepaid,
        'discount': discount,
        'total': total
    }
    return result

}





const TableOffer = (props) => {
    let rows = []

    const goods = (state) => {
        console.log(state)
        if (state.currentComplect) {
            
            rows = [
                createData(state.currentComplect.name, 0, 0, state.price())

            ]
            if (state.legalTech.nameOflt) {
                rows.push(createData(state.legalTech.nameOflt, 0, 0, state.legalTech.priceOfLt))
            }
        }
    }


    goods(props.state)
    console.log(rows)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Наименование</TableCell>
                        <TableCell align="right">Цена</TableCell>
                        <TableCell align="right">Аванс&nbsp;(мес.)</TableCell>
                        <TableCell align="right">Скидка&nbsp;(%)</TableCell>
                        <TableCell align="right">Сумма&nbsp;(руб.)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.total}</TableCell>
                            <OfferPrepaid />
                            <OfferDiscount state={props.state} />
                            {/* <TableCell align="right">{row.discount}</TableCell> */}
                            <TableCell align="right">{row.total}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableOffer