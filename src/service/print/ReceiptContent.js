import * as React from "react";
import { rupiah } from "../../app/components/currency";
import "./ReceiptContent.scss";

export function ReceiptContent(props) {
  const { data = {} } = props;
  const img =
    "data:image/png;base64,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";

  const countSubTotal = (data) => {
    var count = 0;
    data.map((item) => {
      count += item.harga * item.qty;
    });
    return count;
  };

  console.log("data", data);
  return (
    <div id="receipt">
      <div>
        <img src={img} alt="Logo" style={{ width: "100%" }} />
      </div>
      <div style={{ textAlign: "center" }}>
        <p>Merawat dengan Hati</p>
      </div>
      <div>
        <table
          style={{
            width: "100%",
          }}
        >
          <tbody>
            <tr>
              <th style={{ textAlign: "left" }}>
                <h5 style={{ margin: 0 }}>Nama Petugas</h5>
              </th>
              <td>
                <h5 style={{ margin: 0 }}>: {data.petugas?.nama || "-"}</h5>
              </td>
            </tr>
            <tr>
              <th style={{ textAlign: "left" }}>
                <h5 style={{ margin: 0 }}>Tanggal Transaksi</h5>
              </th>
              <td>
                <h5 style={{ margin: 0 }}>
                  :{" "}
                  {window.moment(new Date()).format("DD MMM YYYY HH:mm:ss") ||
                    "-"}
                </h5>
              </td>
            </tr>
            <tr>
              <th style={{ textAlign: "left" }}>
                <h5 style={{ margin: 0 }}>Nama Pasien</h5>
              </th>
              <td>
                <h5 style={{ margin: 0 }}>: {data.pasien || "-"}</h5>
              </td>
            </tr>
            <tr>
              <th style={{ textAlign: "left" }}>
                <h5 style={{ margin: 0 }}>Nomor Registrasi</h5>
              </th>
              <td>
                <h5 style={{ margin: 0 }}>: {data.code_reg || "-"}</h5>
              </td>
            </tr>
            <tr>
              <td
                colSpan="2"
                style={{
                  borderStyle: "dashed",
                  borderRight: "unset",
                  borderLeft: "unset",
                  borderTop: "unset",
                }}
              ></td>
            </tr>
          </tbody>
        </table>
        <table style={{ width: "100%", fontSize: 14 }}>
          {data &&
            data.items &&
            data.items.map((item, index) => {
              return (
                <tbody key={index.toString()}>
                  <tr>
                    <td>{item.nama}</td>
                    <td>{item.qty}</td>
                    <td>{rupiah(item.harga)}</td>
                    <td>{rupiah(item.harga * item.qty)}</td>
                  </tr>
                  {item.composite_item &&
                    item.composite_item.map((value, idx) => {
                      return (
                        <tr key={idx.toString()}>
                          <td>-{value.nama}</td>
                          <td>{value.qty}</td>
                          <td>{rupiah(0)}</td>
                          <td>{rupiah(0)}</td>
                        </tr>
                      );
                    })}
                </tbody>
              );
            })}
          <tbody>
            <tr>
              <td
                colSpan="4"
                style={{
                  borderStyle: "dashed",
                  borderRight: "unset",
                  borderLeft: "unset",
                  borderTop: "unset",
                }}
              ></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th colSpan="3" style={{ textAlign: "right" }}>
                Total
              </th>
              <th colSpan="2" style={{ textAlign: "left" }}>
                {data.items ? rupiah(countSubTotal(data.items)) : 0}
              </th>
            </tr>
            <tr>
              <th colSpan="3" style={{ textAlign: "right" }}>
                Biaya Penanganan
              </th>
              <th colSpan="2" style={{ textAlign: "left" }}>
                {rupiah(data.handlingFee || 0)}
              </th>
            </tr>
            <tr>
              <th colSpan="3" style={{ textAlign: "right" }}>
                Total Keseluruhan
              </th>
              <th colSpan="2" style={{ textAlign: "left" }}>
                {data.items
                  ? rupiah(data.handlingFee + countSubTotal(data.items))
                  : 0}
              </th>
            </tr>
            <tr>
              <th colSpan="3" style={{ textAlign: "right" }}>
                Bayar
              </th>
              <th colSpan="2" style={{ textAlign: "left" }}>
                {rupiah(data.payment || 0)}
              </th>
            </tr>
            <tr>
              <th colSpan="3" style={{ textAlign: "right" }}>
                Kembalian
              </th>
              <th colSpan="2" style={{ textAlign: "left" }}>
                {rupiah(
                  (data.payment || 0) -
                    ((data.handlingFee || 0) + countSubTotal(data.items))
                )}
              </th>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: 10, fontSize: 14 }}>
          <p>
            Catatan: Berikut Obat tidak tersedia: Andalan Pil(10), Erla SM(10),
            Paket Paracetamoll 24ml(10). Anda dapat mengambil obat setelah Kami
            menghubungi Anda.
          </p>
        </div>
        <div style={{ marginTop: 100 }}></div>
      </div>
    </div>
  );
}
