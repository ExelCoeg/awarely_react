import Button from "@/Components/Button";
import Dropdown from "@/Components/Dropdown";
import InputField from "@/Components/InputField";
import RadioInput from "@/Components/RadioInput";
import SectionTitle from "@/Components/SectionTitle";
import { options, timeOptions } from "../../Datas/optionsDatas";
import { KonselorDosenData } from "../../Datas/konselorDatas";
import { useState } from "react";
import LoadingOverlay from "@/Components/LoadingOverlay";
import api from "@/api/axios";
import { useNavigate } from "react-router-dom";
import Header from "@/Components/Header";

export const Ultksp = () => {
  const type = "ULTKSP";
  const [counselor, setCounselor] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [availability, setAvailability] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const sm_className = `mb-9 placeholder-tertiary`;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/forms/createCounseling", {
        type,
        counselor,
        contact,
        description,
        availability,
        schedule_date: new Date(date),
        schedule_time: time,
      });
    } catch (err) {
      console.error("Submit Error!");
    } finally {
      setLoading(false);
      navigate("/home");
    }
  };
  return (
    <div>
      {loading && <LoadingOverlay />}
      <section
        id="laporan"
        className="flex flex-col min-h-screen bg-white-bone animate-fade-in-up"
      >
        <div className="flex flex-col items-center justify-center mb-10 ">
          <SectionTitle
            title={"Layanan Konseling"}
            className="flex flex-row lg:text-left lg:max-w-150 max-w-100"
            size="medium"
            alignment="center"
          />
          <SectionTitle
            subtitle='"ULTKSP"'
            className="flex flex-row italic text-tertiary lg:text-center lg:max-w-150 max-w-100 lg:text-3xl"
            alignment="center"
          ></SectionTitle>
        </div>
        <form
          action=""
          className="p-6 mx-auto w-115 rounded-2xl bg-tertiary lg:w-250 "
        >
          <div className="w-full mb-5">
            <Header title="Dosen PA" />

            <Dropdown
              options={KonselorDosenData.map((val: string) => ({
                label: val,
                value: val,
              }))}
              selected={counselor}
              onChange={(val: string) => {
                setCounselor(val);
              }}
              disabled={false}
            />
          </div>
          <InputField
            label="Kontak (WhatsApp/Line)"
            labelColor="text-white"
            type="text"
            placeholder="08xxxx"
            className={`${sm_className}`}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
          <InputField
            label="Tolong ceritakan apa yang terjadi padamu!"
            labelColor="text-white"
            placeholder="Ceritakan disini..."
            className={`${sm_className} pb-20`}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <div className="flex flex-col gap-2 font-sans font-semibold text-white">
            <Header
              title={"Apakah kamu memerlukan bantuan pendampingan lanjutan?"}
            ></Header>
            <RadioInput
              className="font-semibold text-white mb-9"
              name="availability"
              options={options}
              value={availability ? "yes" : "no"}
              onChange={(val) => {
                console.log("Set Availability value: " + val);
                setAvailability(val === "yes");
              }}
            />
          </div>
          <div className="lg:flex lg:flex-row">
            <InputField
              labelColor="text-white"
              type="date"
              label="Tentukan jadwal pendampingan"
              placeholder="08xxxx"
              disabled={availability === false}
              className={`${sm_className} lg:w-100`}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <div className="w-full">
              <h1 className="mb-2 font-sans text-xl font-semibold text-white">
                Tentukan waktu
              </h1>
              <Dropdown
                options={timeOptions}
                selected={time}
                onChange={(val) => {
                  setTime(val);
                }}
                disabled={availability === false}
              />
            </div>
          </div>
          <Button arrow={false} text={"Submit"} onClick={handleSubmit} />
        </form>
      </section>
    </div>
  );
};

export default Ultksp;
