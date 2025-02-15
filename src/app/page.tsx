import React from 'react';

import { Search } from 'lucide-react';

import {
  Input,
  InputAddon,
  InputGroup,
  InputPrefix,
  InputSuffix,
  InputWrapper,
} from '@components/ui/input';

const Page = () => {
  return (
    <div className="m-8 space-y-4">
      <div className="space-y-4 rounded-[10px] border border-solid border-gray-200 p-4 shadow">
        <InputWrapper>
          <InputPrefix>
            <Search className="size-5 text-gray-500" />
          </InputPrefix>
          <Input placeholder="Search..." className="pl-8" />
        </InputWrapper>
        <InputWrapper>
          <Input placeholder="Search..." className="pr-8" />
          <InputSuffix>
            <Search className="size-5 text-gray-500" />
          </InputSuffix>
        </InputWrapper>
        <InputWrapper>
          <InputPrefix>
            <Search className="size-5 text-gray-500" />
          </InputPrefix>
          <Input placeholder="Search..." className="px-8" />
          <InputSuffix>
            <Search className="size-5 text-gray-500" />
          </InputSuffix>
        </InputWrapper>
      </div>
      <div className="space-y-4 rounded-[10px] border border-solid border-gray-200 p-4 shadow">
        <InputGroup>
          <InputAddon>
            <Search className="size-5 text-gray-500" />
          </InputAddon>
          <Input placeholder="Search..." />
        </InputGroup>
        <InputGroup>
          <Input placeholder="Search..." />
          <InputAddon>
            <Search className="size-5 text-gray-500" />
          </InputAddon>
        </InputGroup>
        <InputGroup>
          <InputAddon>
            <Search className="size-5 text-gray-500" />
          </InputAddon>
          <Input placeholder="Search..." />
          <InputAddon>
            <Search className="size-5 text-gray-500" />
          </InputAddon>
        </InputGroup>
      </div>

      <div className="space-y-4 rounded-[10px] border border-solid border-gray-200 p-4 shadow">
        <InputGroup>
          <InputAddon>
            <Search className="size-5 text-gray-500" />
          </InputAddon>
          <InputWrapper>
            <InputPrefix>
              <Search className="size-5 text-gray-500" />
            </InputPrefix>
            <Input placeholder="Search..." className="pl-8" />
          </InputWrapper>
          <InputAddon>
            <Search className="size-5 text-gray-500" />
          </InputAddon>
        </InputGroup>
        <InputGroup>
          <InputAddon>
            <Search className="size-5 text-gray-500" />
          </InputAddon>
          <InputWrapper>
            <Input placeholder="Search..." className="pr-8" />
            <InputSuffix>
              <Search className="size-5 text-gray-500" />
            </InputSuffix>
          </InputWrapper>
          <InputAddon>
            <Search className="size-5 text-gray-500" />
          </InputAddon>
        </InputGroup>
        <InputGroup>
          <InputAddon>
            <Search className="size-5 text-gray-500" />
          </InputAddon>
          <InputWrapper>
            <InputPrefix>
              <Search className="size-5 text-gray-500" />
            </InputPrefix>
            <Input placeholder="Search..." className="px-8" />
            <InputSuffix>
              <Search className="size-5 text-gray-500" />
            </InputSuffix>
          </InputWrapper>
          <InputAddon>
            <Search className="size-5 text-gray-500" />
          </InputAddon>
          <InputAddon>
            <Search className="size-5 text-gray-500" />
          </InputAddon>
        </InputGroup>
      </div>
    </div>
  );
};

export default Page;
