import ListHeader from "./listHeader";
import ListItem from "./listItem";
import MOSList from "./mobileOs";
import MobManf from "./MoblieManufacture";


function List()
{
    return (
        <>
        
        {/* <ListHeader title="Shop By Category" />
        <ListItem /> */
        }
        <ListHeader title="Mobile Operating System" />
        <MOSList />
        <ListHeader title="Mobile Manufacture"/>
        <MobManf />
        </>
    )
}
export default List