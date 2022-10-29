import React from 'react'
import { ClipLoader } from 'react-spinners'
const CompanyList = (props) => {
  let loading = true
  const list = props.companyList?.companies
  let color = '#ffffff'
  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  }

  return (
    <>
      <div
        className="min-height-300 bg-primary position-absolute w-100"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          left: '0',
          right: '0',
        }}
      ></div>

      <main className="main-content position-relative border-radius-lg ">
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl "
          id="navbarBlur"
          data-scroll="false"
        >
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <h6 className="font-weight-bolder text-white mb-0">
                List of company Names{' '}
              </h6>
            </nav>
          </div>
        </nav>

        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-0">
                  <h6>Authors table</h6>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        {list ? (
                          <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Company Name
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Email
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Status
                            </th>
                          </tr>
                        ) : null}
                      </thead>
                      <tbody style={{}}>
                        {list ? (
                          list.map((data, index) => (
                            <tr key={index}>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div>
                                    <img
                                      src="../assets/img/logo-Zauba.png"
                                      className="avatar avatar-sm me-3"
                                      alt="user1"
                                    />
                                  </div>
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {data.name}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="text-xs font-weight-bold mb-0">
                                  {data.email}
                                </p>
                              </td>
                              <td className="align-middle text-center text-sm">
                                <span className="badge badge-sm bg-gradient-success">
                                  {data.status}
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <ClipLoader
                            color={color}
                            loading={loading}
                            cssOverride={override}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default CompanyList
