function Table({ data, config, keyFn }) {

    const renderHeaders = config.map((column) => {
        return(
        <th key={column.label}>{column.label}</th>
        );
    });

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column)=>{
            return <td className="p-2" key={column.label}>
                {column.render(rowData)}
            </td>
        });
        return (
            <tr className="border-b" key={keyFn(rowData)} >
                {/* <td className="p-3">{config[0].render(fruit)}</td>
                <td className="p-3">{config[1].render(fruit)}</td>
                <td className="p-3">{config[2].render(fruit)}</td> */}
                {renderedCells}
            </tr>
        );
    });
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
};
export default Table;