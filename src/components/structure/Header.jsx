import tshirt from '../../assets/tshirt.png'
export const Header = () => {
  return (
    <>
  
    <div className="Header">
        <div className="logo">
            <img src={tshirt} alt="missing-logo-taimoor" onClick={()=>{window.location.href="https://www.youtube.com/@kodiecode"}} />
        </div>
    </div>
        <h1 className='Auth'>Authentication Taturial</h1>
        </>
  );
}

