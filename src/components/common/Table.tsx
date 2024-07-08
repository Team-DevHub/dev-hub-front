import styled from 'styled-components';
import { getCategoryName } from '@/utils/getCategoryName';
import { formatDate } from '@/utils/format';
import { PostSummary } from '@/models/post.model';

interface TableProps {
  data: PostSummary[];
  buttonTitle: string;
  button: (data: PostSummary) => JSX.Element;
  handleClick: (postId: number) => void;
}

function Table({ data = [], buttonTitle, button, handleClick }: TableProps) {
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>카테고리</th>
            <th className='title'>제목</th>
            <th>작성일자</th>
            <th>{buttonTitle}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.postId}>
              <td>
                <Tag>{getCategoryName(item.categoryId)}</Tag>
              </td>
              <td className='title' onClick={() => handleClick(item.postId)}>
                {item.title}
              </td>
              <td className='createdAt'>{formatDate(item.createdAt)}</td>
              <td>{button(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}

export default Table;

const TableContainer = styled.div`
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 12px;
  min-height: 320px;
  max-height: 360px;
  overflow-y: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    border-bottom: 1px solid ${({ theme }) => theme.color_borderGray};
    background-color: ${({ theme }) => theme.color_bgWhite};

    th {
      height: 55px;
      font-weight: 700;
      padding: 16px;
      border-bottom: 1px solid ${({ theme }) => theme.color_borderGray};
      text-align: center;
      vertical-align: middle;
    }

    th.title {
      width: 45%;
      text-align: left;
    }

    td {
      height: 55px;
      font-weight: 400;

      border-bottom: 1px solid ${({ theme }) => theme.color_borderGray};
      text-align: center;
      vertical-align: middle;
    }

    td.title {
      font-weight: 500;
      text-align: left;
      cursor: pointer;
    }

    td.createdAt {
      color: ${({ theme }) => theme.color_textGray};
    }

    thead {
      position: sticky;
      top: 0;
      background-color: ${({ theme }) => theme.color_bgWhite};
      z-index: 1;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.color_textWhite};
  background-color: ${({ theme }) => theme.color_key};
  font-size: ${({ theme }) => theme.fontSize_sm};
  padding: 5px 14px;
  border-radius: 10px;
  font-weight: 500;
`;
