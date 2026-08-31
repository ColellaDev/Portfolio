import styled from "styled-components";
import { DEVICE } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }

  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 900px;
  }

  .experience-card {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 2rem;
    background-color: ${({ theme }) => theme.COLORS.CARD_PRIMARY};
    border-left: 4px solid ${props => props.theme.COLORS.PRIMARY};
  border-color: ${({ theme }) => theme.COLORS.SECUNDARY};
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateX(8px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;

      .header-content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        flex: 1;
      }

      .company-position {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;

        h3 {
          font-size: 1.5rem;
          margin: 0;
          color: ${props => props.theme.COLORS.TEXT};
        }

        .position {
          color: ${props => props.theme.COLORS.PRIMARY};
          font-weight: 600;
          white-space: nowrap;
        }
      }

      .period {
        color: ${props => props.theme.COLORS.PRIMARY};
        font-size: 0.9rem;
        font-style: italic;
      }

      .expand-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        color: ${props => props.theme.COLORS.PRIMARY};
        cursor: pointer;
        padding: 0;
        transition: transform 0.3s ease;
        flex-shrink: 0;

        &.expanded {
          transform: rotate(180deg);
        }

        &:hover {
          color: ${props => props.theme.COLORS.SECONDARY};
        }
      }
    }

    .expandable-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid ${props => props.theme.COLORS.PRIMARY}33;
      animation: slideDown 0.3s ease-out;

      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }

    .description {
      color: ${props => props.theme.COLORS.TEXT};
      line-height: 1.6;
      margin: 0;
    }

    .achievements {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin: 0;

      h4 {
        margin: 0;
        font-size: 1rem;
        color: ${props => props.theme.COLORS.PRIMARY};
      }

      ul {
        margin: 0;
        padding-left: 1.5rem;
        list-style: none;

        li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: ${props => props.theme.COLORS.TEXT};
          margin-bottom: 0.5rem;

          &:before {
            content: "▸";
            color: ${props => props.theme.COLORS.PRIMARY};
            font-weight: bold;
          }
        }
      }
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0;

      .tech-tag {
        background-color: ${props => props.theme.COLORS.PRIMARY};
        color: ${props => props.theme.COLORS.BACKGROUND};
        padding: 0.4rem 0.8rem;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
      }
    }
  }

  @media (max-width: ${DEVICE.MD}) {
    h1 {
      font-size: 2rem;
    }

    .experience-list {
      max-width: 100%;
    }

    .experience-card {
      padding: 1.5rem;
      border-left-width: 3px;

      .header {
        flex-direction: column;

        .header-content .company-position {
          flex-direction: column;

          .position {
            white-space: normal;
          }
        }
      }

      .expandable-content {
        margin-top: 1rem;
        padding-top: 1rem;
      }
    }
  }

  @media (max-width: ${DEVICE.SM}) {
    h1 {
      font-size: 1.75rem;
    }

    .experience-card {
      padding: 1rem;

      h3 {
        font-size: 1.25rem;
      }

      .achievements ul {
        padding-left: 1rem;
      }
    }
  }
`;
