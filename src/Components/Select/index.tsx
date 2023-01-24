import { Listbox, Transition } from "@headlessui/react";
import { CaretDown, CaretUp, Check } from "phosphor-react";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import styles from "./styles.module.scss";

interface SelectProps {
  title: string;
  data: string[];
  defaultValue: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const Select = ({
  data,
  title,
  defaultValue,
  setValue,
}: SelectProps) => {
  const [selected, setSelected] = useState(defaultValue);

  return (
    <>
      <Listbox
        value={selected}
        onChange={(v) => {
          setSelected(v);
          setValue(v);
        }}
      >
        <div className={styles.select}>
          <Listbox.Label className={styles.label}>{title}:</Listbox.Label>
          <Listbox.Button className={styles.button}>
            <span>{selected}</span>
            <span>
              <CaretUp />
              <CaretDown style={{ marginTop: -4 }} />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={styles.options}>
              {data.map((value, valueIdx) => (
                <Listbox.Option
                  key={valueIdx}
                  className={({ active }) =>
                    `${styles.option} ${active && styles.active}`
                  }
                  value={value}
                >
                  {({ selected }) => (
                    <>
                      <span className={`${selected && styles.selected}`}>
                        {value}
                      </span>
                      {selected ? (
                        <span>
                          <Check
                            style={{ height: 20, width: 20 }}
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
};
