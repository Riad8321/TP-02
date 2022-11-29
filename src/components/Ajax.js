export default function Ajax(props) {
        const dataFetch = fetch('./items.json')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
            })
    return (
        {dataFetch}
    );
};