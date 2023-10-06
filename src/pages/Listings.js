import React from 'react';
import Container from 'react-bootstrap/Container';
import '../App.css';
import Sidebar from '../common/Sidebar';

const Listings = () => {
    return (
        <div style={{ display: 'flex', margin: 0, padding: 0, }}>
        <Sidebar />
          <main style={{ width: '100%', padding: '20px', backgroundColor: '#e9e9e9', }}>
              <Container>
              <div style={{backgroundColor:'#fff',padding:'10px 0',width:'100%',}}>
            <Container>
                <div className="table-responsive p-2">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col" style={{borderBottom:'2px solid mediumorchid',}}>COMPANY<span>ID</span></th>
                                <th scope="col" style={{borderBottom:'2px solid mediumorchid',}}>COMPANY</th>
                                <th scope="col" style={{borderBottom:'2px solid mediumorchid',}}>MID</th>
                                <th scope="col" style={{borderBottom:'2px solid mediumorchid',}}>BANK<span className="ps-1">NAME</span></th>
                                <th scope="col" style={{borderBottom:'2px solid mediumorchid',}}>CUR</th>
                                <th className="text-center" scope="col" style={{borderBottom:'2px solid mediumorchid',}}>3DS</th>
                                <th className="text-center" scope="col" style={{borderBottom:'2px solid mediumorchid',}}>ACTIVE</th>
                                <th className="text-center" scope="col" style={{borderBottom:'2px solid mediumorchid',}}>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="bg-blight">235</span></td>
                                <td><span className="bg-bdark">ABC<span className="ps-1">LOANS</span></span></td>
                                <td><span className="bg-blight">1343</span></td>
                                <td><span className="bg-bdark">Faster<span>Trading</span></span></td>
                                <td><span className="bg-bdark">GBP</span></td>
                                <td className="text-center px-0"><span className="fas fa-check"></span></td>
                                <td className="text-center"><span className="fas fa-check"></span></td>
                                <td className="text-center"><span className="fas fa-ellipsis-h"></span></td>
                            </tr>
                            <tr>
                                <td><span className="bg-blight">236</span></td>
                                <td><span className="bg-bdark">BCE<span className="ps-1">LOANS</span></span></td>
                                <td><span className="bg-blight">1298</span></td>
                                <td><span className="bg-bdark">Secure<span>Trading</span></span></td>
                                <td><span className="bg-bdark">GBP</span></td>
                                <td className="text-center px-0"><span className="fas fa-check"></span></td>
                                <td className="text-center"><span className="fas fa-check"></span></td>
                                <td className="text-center"><span className="fas fa-ellipsis-h"></span></td>
                            </tr>
                            <tr>
                                <td><span className="bg-blight">237</span></td>
                                <td><span className="bg-bdark">CDE<span className="ps-1">LOANS</span></span></td>
                                <td><span className="bg-blight">1313</span></td>
                                <td><span className="bg-bdark">Secure<span>Trading</span></span></td>
                                <td><span className="bg-bdark">GBP</span></td>
                                <td className="text-center px-0"><span className="fas fa-times"></span></td>
                                <td className="text-center"><span className="fas fa-check"></span></td>
                                <td className="text-center"><span className="fas fa-ellipsis-h"></span></td>
                            </tr>
                            <tr>
                                <td><span className="bg-blight">235</span></td>
                                <td><span className="bg-bdark">DEF<span className="ps-1">LOANS</span></span></td>
                                <td><span className="bg-blight">1323</span></td>
                                <td><span className="bg-bdark">Secure<span>Trading</span></span></td>
                                <td><span className="bg-bdark">GBP</span></td>
                                <td className="text-center px-0"><span className="fas fa-times"></span></td>
                                <td className="text-center"><span className="fas fa-check"></span></td>
                                <td className="text-center"><span className="fas fa-ellipsis-h"></span></td>
                            </tr>
                            <tr>
                                <td><span className="bg-blight">235</span></td>
                                <td><span className="bg-bdark">FEG<span className="ps-1">LOANS</span></span></td>
                                <td><span className="bg-blight">1443</span></td>
                                <td><span className="bg-bdark">Secure<span>Trading</span></span></td>
                                <td><span className="bg-bdark">GBP</span></td>
                                <td className="text-center px-0"><span className="fas fa-times"></span></td>
                                <td className="text-center"><span className="fas fa-check"></span></td>
                                <td className="text-center"><span className="fas fa-ellipsis-h"></span></td>
                            </tr>
                            <tr>
                                <td><span className="bg-blight">237</span></td>
                                <td><span className="bg-bdark">GFR<span className="ps-1">LOANS</span></span></td>
                                <td><span className="bg-blight">1943</span></td>
                                <td><span className="bg-bdark">Faster<span>Trading</span></span></td>
                                <td><span className="bg-bdark">GBP</span></td>
                                <td className="text-center px-0"><span className="fas fa-times"></span></td>
                                <td className="text-center"><span className="fas fa-check"></span></td>
                                <td className="text-center"><span className="fas fa-ellipsis-h"></span></td>
                            </tr>
                            <tr>
                                <td><span className="bg-blight">235</span></td>
                                <td><span className="bg-bdark">ABC<span className="ps-1">LOANS</span></span></td>
                                <td><span className="bg-blight">1343</span></td>
                                <td><span className="bg-bdark">Faster<span>Trading</span></span></td>
                                <td><span className="bg-bdark">GBP</span></td>
                                <td className="text-center px-0"><span className="fas fa-times"></span></td>
                                <td className="text-center"><span className="fas fa-check"></span></td>
                                <td className="text-center"><span className="fas fa-ellipsis-h"></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="d-flex align-items-center justify-content-between px-3 mt-3">
                    <div className="bg-bdark fs13"> <span>Page</span> <input className="input-10 text-center" type="text" value="1" /> <span><span className="px-1">of</span>1</span> </div>
                    <div className="d-flex justify-content-end bg-bdark fs13"> <span className="pe-1">Show</span> <input className="input-10" type="number" value="25" /> <span className="ps-2"><span className="pe-2">/</span>Page</span> </div>
                </div>
            </Container>
        </div>
              </Container>
          </main>
      </div>
       
    );
}

export default Listings;
