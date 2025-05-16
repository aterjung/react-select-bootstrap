import React from "react";
import ReactSelect from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";

export type ReactSelectBootstrapProps = StateManagerProps & {
  isInvalid?: boolean;
};

export const ReactSelectBootstrap = ({
                                       isInvalid = false,
                                        classNames = {},
                                       ...props
                                     }: ReactSelectBootstrapProps) => (
  <ReactSelect
    {...props}
    unstyled
    classNamePrefix="react-select"
    className={`react-select-control ${isInvalid ? "is-invalid" : ""}`}
    classNames={{  // Merge the provided classNames with the default
      indicatorsContainer: classNames.indicatorsContainer || (() => "react-select-indicators"),
      ...classNames, // Spread to include all other potential overrides
    }}
  />
);
