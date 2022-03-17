import { FC, Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { IListBoxProps } from "../types";
import { ChevronDownIcon } from "@heroicons/react/outline";

const ListBox: FC<IListBoxProps> = ({
  className,
  values,
  label,
  id,
  selected,
  search,
  onValueChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(selected ?? values[0]);

  useEffect(() => {
    console.log(selected);
    console.log(selectedValue)
  }, [selected]);

  return (
    <div className="flex flex-col box-border w-full p-0 font-medium text-xs space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="w-full text-swooveGray-caption p-0 font-medium text-xs"
        >
          {label}
        </label>
      )}
      <Listbox
        value={selected?.value}
        onChange={(ev) => {
          setSelectedValue(values.filter((_v) => _v.value === ev)[0]);
        }}
      >
        <div className="relative">
          <Listbox.Button
            className={`${className} relative w-full py-3 pl-4 pr-10  text-left bg-white border border-gray-200 cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 text-sm`}
          >
            <span className="block truncate">{selected?.value}</span>
            <span className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
              <ChevronDownIcon
                className="w-5 h-5 text-[#B4B7C3]"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-10 absolute w-full py-1 mt-1 overflow-auto text-base bg-white shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {/* {search && <div> Search... </div>} */}
              {values.map((value, valueIdx) => (
                <Listbox.Option
                  key={valueIdx}
                  className={({ active }) =>
                    `${
                      active
                        ? "text-primary-main bg-primary-surface"
                        : "text-gray-900"
                    } cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={value.value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`${
                          selected
                            ? "text-primary-main font-medium"
                            : "font-normal"
                        } block truncate capitalize`}
                      >
                        {value.value}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            selected ? "text-primary-main" : "text-gray-600"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
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
    </div>
  );
};

export default ListBox;
