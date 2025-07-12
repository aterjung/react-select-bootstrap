import React from "react";
import ReactSelect from "react-select";
import AsyncSelect from 'react-select/async';
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";
import CreatableSelect from "react-select/creatable";

export type ReactSelectBootstrapProps = StateManagerProps & {
  isInvalid?: boolean;
  async: boolean;
  creatable: boolean;
};

export const ReactSelectBootstrap = ({
                                       isInvalid = false,
                                        async = false,
                                        creatable = false,
                                        classNames = {},
                                       ...props
                                     }: ReactSelectBootstrapProps) => {

  // Explicitly type the Component as React.ComponentType
  const Component: React.ComponentType<StateManagerProps> =
    creatable ? CreatableSelect : async ? AsyncSelect : ReactSelect;

  return (
    <Component
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
}
